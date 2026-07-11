import React, { useEffect, useMemo, useRef, useState } from "react";
import "./form-controls.css";

const SearchableMultiSelect = ({
  labelKey = "label",
  valueKey = "value",
  options = [],
  value = [],
  onChange,
  placeholder = "Search...",
  emptyText = "No options found",
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!wrapRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedValues = Array.isArray(value) ? value : [];

  const filteredOptions = useMemo(() => {
    const q = String(query || "").trim().toLowerCase();

    return options.filter((item) => {
      const label = String(item?.[labelKey] || "").toLowerCase();
      return !q || label.includes(q);
    });
  }, [options, query, labelKey]);

  const selectedItems = useMemo(() => {
    const setVals = new Set(selectedValues.map(String));
    return options.filter((item) => setVals.has(String(item?.[valueKey])));
  }, [options, selectedValues, valueKey]);

  const isSelected = (item) =>
    selectedValues.some((v) => String(v) === String(item?.[valueKey]));

  const toggleItem = (item) => {
    if (disabled) return;

    const itemValue = String(item?.[valueKey]);

    let next;
    if (isSelected(item)) {
      next = selectedValues.filter((v) => String(v) !== itemValue);
    } else {
      next = [...selectedValues, itemValue];
    }

    onChange?.(next);
  };

  const removeChip = (itemValue) => {
    if (disabled) return;
    onChange?.(selectedValues.filter((v) => String(v) !== String(itemValue)));
  };

  return (
    <div className={`fs-ms ${disabled ? "is-disabled" : ""}`} ref={wrapRef}>
      <div
        className={`fs-ms-control ${open ? "is-open" : ""}`}
        onClick={() => {
          if (disabled) return;
          setOpen((prev) => !prev);
        }}
      >
        <div className="fs-ms-chips">
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => (
              <span key={item?.[valueKey]} className="fs-chip">
                <span className="fs-chip-label">{item?.[labelKey]}</span>
                {!disabled && (
                  <button
                    type="button"
                    className="fs-chip-remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeChip(item?.[valueKey]);
                    }}
                    aria-label={`Remove ${item?.[labelKey]}`}
                  >
                    ×
                  </button>
                )}
              </span>
            ))
          ) : (
            <span className="fs-ms-placeholder">{placeholder}</span>
          )}
        </div>

        <span className="fs-ms-arrow">▾</span>
      </div>

      {open && !disabled && (
        <div className="fs-ms-dropdown">
          <input
            type="text"
            className="fs-control fs-ms-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />

          <div className="fs-ms-list">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((item) => (
                <button
                  key={item?.[valueKey]}
                  type="button"
                  className={`fs-ms-option ${isSelected(item) ? "is-selected" : ""}`}
                  onClick={() => toggleItem(item)}
                >
                  <span className="fs-ms-option-text">{item?.[labelKey]}</span>
                  {isSelected(item) && <span className="fs-ms-check">✓</span>}
                </button>
              ))
            ) : (
              <div className="fs-ms-empty">{emptyText}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableMultiSelect;
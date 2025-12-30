'use client';

import { ChevronRight } from 'lucide-react';

/**
 * CategoryHeader - Expandable category header with selection count
 * 
 * Features:
 * - Chevron rotation animation on expand/collapse
 * - Selection count badge
 * - Focus state for keyboard navigation
 * 
 * @param category - Category name
 * @param isExpanded - Whether the category is expanded
 * @param isFocused - Whether the header has keyboard focus
 * @param onToggle - Callback to toggle expansion
 * @param selectedCount - Number of selected apps in this category
 * @param onFocus - Optional callback when header receives focus
 * 
 * @example
 * <CategoryHeader
 *   category="Browsers"
 *   isExpanded={true}
 *   isFocused={false}
 *   onToggle={() => toggleCategory("Browsers")}
 *   selectedCount={3}
 * />
 */
export function CategoryHeader({
    category,
    isExpanded,
    isFocused,
    onToggle,
    selectedCount,
    onFocus,
}: {
    category: string;
    isExpanded: boolean;
    isFocused: boolean;
    onToggle: () => void;
    selectedCount: number;
    onFocus?: () => void;
}) {
    return (
        <button
            data-nav-id={`category:${category}`}
            onClick={(e) => { e.stopPropagation(); onFocus?.(); onToggle(); }}
            tabIndex={-1}
            aria-expanded={isExpanded}
            aria-label={`${category} category, ${selectedCount} apps selected`}
            className={`category-header w-full flex items-center gap-2 text-[11px] font-semibold text-[var(--text-muted)] 
        hover:text-[var(--text-secondary)] uppercase tracking-widest mb-2 pb-1.5 
        border-b border-[var(--border-primary)] transition-colors duration-150 px-0.5 outline-none
        ${isFocused ? 'bg-[var(--bg-focus)] text-[var(--text-secondary)]' : ''}`}
            style={{ transition: 'color 0.5s, border-color 0.5s' }}
        >
            <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
            <span className="flex-1 text-left">{category}</span>
            {selectedCount > 0 && (
                <span
                    className="text-[10px] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] w-5 h-5 rounded-full flex items-center justify-center font-medium"
                    style={{ transition: 'background-color 0.5s, color 0.5s' }}
                >
                    {selectedCount}
                </span>
            )}
        </button>
    );
}

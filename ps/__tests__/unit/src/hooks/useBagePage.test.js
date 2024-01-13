import { renderHook, act } from '@testing-library/react-hooks';
import useBasePage from '../../../../../src/hooks/Page/useBasePage';

describe('useBasePage Hook', () => {
    it('handles transitions correctly', () => {
        const { result } = renderHook(() => useBasePage());

        act(() => {
            result.current.goToInputPage();
        });
        expect(result.current.currentPage).toBe('INPUT_PAGE');

        act(() => {
            result.current.goToMatchupPage(['Item 1', 'Item 2']);
        });
        expect(result.current.currentPage).toBe('MATCHUP_PAGE');
        expect(result.current.items).toEqual(['Item 1', 'Item 2']);

        act(() => {
            result.current.goToResultsPage({ 'Item 1': 3, 'Item 2': 1 });
        });
        expect(result.current.currentPage).toBe('RESULTS_PAGE');
        expect(result.current.scores).toEqual({ 'Item 1': 3, 'Item 2': 1 });
    });
});

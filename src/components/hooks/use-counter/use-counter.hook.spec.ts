import { useCounter } from "./use-counter.hook";

import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

it("use get stuff", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(0);

    act(() => {
        result.current.increment();
    });
    expect(result.current.counter).toBe(1);

    act(() => {
        result.current.decrement();
    });
    expect(result.current.counter).toBe(0);
});

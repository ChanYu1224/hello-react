import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { SimpleButton } from "./SimpleButton";


test("stateがfalseの場合、OFFが表示される", () => {
    render(<SimpleButton state={false} onClick={() => {}}/>);
    expect(screen.getByText("OFF")).exist;
})

test("stateがtrueの場合、ONが表示される", () => {
    render(<SimpleButton state={true} onClick={() => {}}/>);
    expect(screen.getByText("ON")).exist;
})

test("クリックした時に`onClick`が呼ばれる", () => {
    const onClick = vi.fn();

    // レンダリングとボタンのクリック
    render(<SimpleButton state={false} onClick={onClick}/>);
    screen.getByRole("button").click();

    expect(onClick).toBeCalled();
})
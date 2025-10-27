import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";

global.fetch = jest.fn();

describe("UserProfile race condition handling", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show the latest user even if earlier fetch resolves later", async () => {
    let resolveUser1, resolveUser2;

    const fetchPromise1 = new Promise((res) => { resolveUser1 = res; });
    const fetchPromise2 = new Promise((res) => { resolveUser2 = res; });

    fetch
      .mockImplementationOnce(() => fetchPromise1)
      .mockImplementationOnce(() => fetchPromise2);

    const { rerender } = render(<UserProfile userId="1" />);

    rerender(<UserProfile userId="2" />);

    resolveUser2({
      ok: true,
      json: () => Promise.resolve({ name: "User 2" }),
    });

    resolveUser1({
      ok: true,
      json: () => Promise.resolve({ name: "User 1" }),
    });

    await waitFor(() => expect(screen.getByText("User 2")).toBeInTheDocument());

    expect(screen.queryByText("User 1")).not.toBeInTheDocument();

    expect(fetch).toHaveBeenCalledTimes(2);
  });
});


// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import UserProfile from "./UserProfile";

// global.fetch = jest.fn();

// describe("UserProfile race condition handling", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should render User 1 after fetch resolves", async () => {
//     let resolveUser1;
//     const fetchPromise1 = new Promise((res) => { resolveUser1 = res; });
//     fetch.mockImplementationOnce(() => fetchPromise1);

//     render(<UserProfile userId="1" />);

//     resolveUser1({
//       ok: true,
//       json: () => Promise.resolve({ name: "User 1" }),
//     });

//     await waitFor(() => expect(screen.getByText("User 1")).toBeInTheDocument());
//   });
// });


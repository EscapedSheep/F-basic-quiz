import { getUser, getEducations } from "../javascript/components";

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

describe("user and educations", () => {
  test("should fetch user with mock fetch", () => {
    getUser(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/users/1");
  });

  test("should fetch education with mock fetch", () => {
    getEducations(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:8080/users/1/educations"
    );
  });

  test("should throw error when fetch user reject", async () => {
    fetch.mockReturnValueOnce(() =>
      Promise.reject(new Error("API server down"))
    );
    await expect(getUser(1)).resolves.toThrowError();
  });

  test("should throw error when fetch education reject", async () => {
    fetch.mockReturnValueOnce(() =>
      Promise.reject(new Error("API server down"))
    );
    await expect(getEducations(1)).resolves.toThrowError();
  });
});

// import resolveObjects from "./resolveObjects-basic";
import resolveObjects from "./resolveObjects";

it("works", () => {
  const tests = [
    {
      input: {
        a: {
          b: {
            c: "z",
          },
        },
        "a.b.d": "y",
      },
      output: {
        a: {
          b: {
            c: "z",
            d: "y",
          },
        },
      },
    },
    {
      input: {
        z: {
          b: {
            c: "z",
            d: {
              e: {},
            },
          },
        },
        "z.b.d.e.f": "y",
      },
      output: {
        z: {
          b: {
            c: "z",
            d: {
              e: {
                f: "y",
              },
            },
          },
        },
      },
    },
  ];

  tests.forEach((test) => {
    expect(resolveObjects(test.input)).toEqual(test.output);
  });
});

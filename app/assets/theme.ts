import { ThemeProvider } from "@material-tailwind/react";

const theme = {
  component: {
    defaultProps: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  },
  valid: {
    main: "#4caf50",
  },
  styles: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.75,
        letterSpacing: "0.02857em",
        borderRadius: "0.125rem",
        padding: "0.625rem 1.25rem",
      },
      contained: {
        boxShadow: "none",
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#2e7d32",
        },
      },
      containedSecondary: {
        "&:hover": {
          backgroundColor: "#c62828",
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#e0e0e0",
          },
          "&:hover fieldset": {
            borderColor: "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#bdbdbd",
          },
        },
      },
    },

    MuiInputLabel: {
      root: {
        "&.Mui-focused": {
          color: "#bdbdbd",
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&.Mui-focused": {
          color: "#bdbdbd",
        },
      },
    },
    MuiInputBase: {
      root: {
        color: "#bdbdbd",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#bdbdbd",
        },
      },
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export const Themes = ({ value, children }) => {
  return (
    <div>
      <ThemeProvider theme={value}>{children}</ThemeProvider>;
    </div>
  );
};

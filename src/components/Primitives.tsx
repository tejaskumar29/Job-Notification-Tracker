import React, { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { colors } from "../design-tokens";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...rest }) => {
  return (
    <button className={`kn-button kn-button--${variant}`} {...rest}>
      {children}
    </button>
  );
};

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className="kn-input" {...props} />;
};

export const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea className="kn-textarea" rows={4} {...props} />;
};

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <section className="kn-card">
      {title && <h2 className="kn-card__title">{title}</h2>}
      <div className="kn-card__body">{children}</div>
    </section>
  );
};

interface PromptBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const PromptBox: React.FC<PromptBoxProps> = ({ label, value, onChange }) => {
  return (
    <div className="kn-prompt-box">
      <label className="kn-prompt-box__label">{label}</label>
      <textarea
        className="kn-prompt-box__textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p className="kn-prompt-box__hint">
        Keep prompts concise and outcome-focused. This box is for repeatable, reliable instructions.
      </p>
    </div>
  );
};

export const statusColor = {
  "Not Started": colors.warning,
  "In Progress": colors.accent,
  Shipped: colors.success
} as const;


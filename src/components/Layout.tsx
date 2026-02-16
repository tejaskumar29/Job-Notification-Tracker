import React, { PropsWithChildren, ReactNode } from "react";
import { colors, spacing } from "../design-tokens";

type Status = "Not Started" | "In Progress" | "Shipped";

interface TopBarProps {
  projectName: string;
  currentStep: number;
  totalSteps: number;
  status: Status;
}

export const TopBar: React.FC<TopBarProps> = ({
  projectName,
  currentStep,
  totalSteps,
  status
}) => {
  return (
    <header className="kn-topbar">
      <div className="kn-topbar__left">{projectName}</div>
      <div className="kn-topbar__center">
        Step {currentStep} / {totalSteps}
      </div>
      <div className="kn-topbar__right">
        <span className={`kn-badge kn-badge--${status.replace(" ", "-").toLowerCase()}`}>
          {status}
        </span>
      </div>
    </header>
  );
};

interface ContextHeaderProps {
  title: string;
  subtitle: string;
}

export const ContextHeader: React.FC<ContextHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="kn-context-header">
      <h1 className="kn-context-header__title">{title}</h1>
      <p className="kn-context-header__subtitle">{subtitle}</p>
    </section>
  );
};

interface WorkspaceLayoutProps {
  primary: ReactNode;
  secondary: ReactNode;
}

export const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ primary, secondary }) => {
  return (
    <main className="kn-workspace">
      <section className="kn-workspace__primary">{primary}</section>
      <aside className="kn-workspace__secondary">{secondary}</aside>
    </main>
  );
};

interface ProofItem {
  id: string;
  label: string;
}

const PROOF_ITEMS: ProofItem[] = [
  { id: "ui", label: "UI Built" },
  { id: "logic", label: "Logic Working" },
  { id: "test", label: "Test Passed" },
  { id: "deployed", label: "Deployed" }
];

interface ProofFooterProps {
  notes?: string;
}

export const ProofFooter: React.FC<ProofFooterProps> = () => {
  return (
    <footer className="kn-proof-footer">
      <div className="kn-proof-footer__content">
        {PROOF_ITEMS.map((item) => (
          <div key={item.id} className="kn-proof-footer__item">
            <label className="kn-proof-footer__label">
              <input
                type="checkbox"
                className="kn-proof-footer__checkbox"
                aria-describedby={`${item.id}-proof-input`}
              />
              <span>{item.label}</span>
            </label>
            <input
              id={`${item.id}-proof-input`}
              type="text"
              placeholder="Add proof (link, note, or reference)"
              className="kn-proof-footer__input"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export const PageShell: React.FC<
  PropsWithChildren<{
    projectName: string;
    currentStep: number;
    totalSteps: number;
    status: Status;
    title: string;
    subtitle: string;
    primary: ReactNode;
    secondary: ReactNode;
  }>
> = ({ projectName, currentStep, totalSteps, status, title, subtitle, primary, secondary }) => {
  return (
    <div
      className="kn-app"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        padding: spacing.lg
      }}
    >
      <TopBar
        projectName={projectName}
        currentStep={currentStep}
        totalSteps={totalSteps}
        status={status}
      />
      <ContextHeader title={title} subtitle={subtitle} />
      <WorkspaceLayout primary={primary} secondary={secondary} />
      <ProofFooter />
    </div>
  );
};


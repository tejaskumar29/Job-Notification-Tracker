import React, { useState } from "react";
import { PageShell } from "./components/Layout";
import { Button, Card, Input, PromptBox, TextArea } from "./components/Primitives";

export const App: React.FC = () => {
  const [prompt, setPrompt] = useState(
    "Build a calm, production-ready interface for this step. Avoid visual noise and keep spacing generous."
  );

  return (
    <PageShell
      projectName="KodNest Premium Build System"
      currentStep={1}
      totalSteps={4}
      status="Not Started"
      title="Define the interaction surface"
      subtitle="Clarify what this step must enable, without jumping into implementation details."
      primary={
        <div className="kn-stack kn-stack--gap-lg">
          <Card title="Primary workspace">
            <p className="kn-text-block">
              This area is reserved for the main product interaction. Use cards, clear hierarchy,
              and predictable patterns. Avoid unnecessary decoration; every element should serve a
              specific purpose.
            </p>
            <div className="kn-stack kn-stack--gap-md">
              <div className="kn-field">
                <label className="kn-field__label">Working title for this step</label>
                <Input placeholder="e.g. Configure billing details" />
              </div>
              <div className="kn-field">
                <label className="kn-field__label">User outcome in one sentence</label>
                <TextArea placeholder="Describe the single outcome this step must deliver." />
              </div>
            </div>
          </Card>

          <Card title="Edge cases & validation">
            <p className="kn-text-block">
              Capture how the interface should behave when information is missing, partial, or
              invalid. Errors explain what went wrong and how to fix it. Empty states always offer a
              next step.
            </p>
            <div className="kn-stack kn-stack--gap-sm">
              <div className="kn-field">
                <label className="kn-field__label">Empty state</label>
                <TextArea placeholder="What should the user see before any data exists?" />
              </div>
              <div className="kn-field">
                <label className="kn-field__label">Error handling</label>
                <TextArea placeholder="Describe how errors are shown and how users can recover." />
              </div>
            </div>
          </Card>
        </div>
      }
      secondary={
        <div className="kn-stack kn-stack--gap-lg">
          <Card title="Step guidance">
            <p className="kn-text-block">
              Use this panel to keep the implementation grounded. Write clear, neutral copy that
              describes what good looks like for this step.
            </p>
            <ul className="kn-list">
              <li>Stay within the defined color and spacing system.</li>
              <li>Keep the layout stable; avoid surprise movements or animations.</li>
              <li>Prefer clarity over cleverness in labels and messaging.</li>
            </ul>
          </Card>

          <Card title="Reusable prompt">
            <PromptBox label="Prompt for build tools" value={prompt} onChange={setPrompt} />
            <div className="kn-button-row">
              <Button variant="primary">Copy</Button>
              <Button variant="secondary">Build in Lovable</Button>
            </div>
          </Card>

          <Card title="Outcome journal">
            <div className="kn-button-row kn-button-row--wrap">
              <Button variant="secondary">It Worked</Button>
              <Button variant="secondary">Error</Button>
              <Button variant="secondary">Add Screenshot</Button>
            </div>
            <TextArea placeholder="Capture what happened, what you learned, and what should change next time." />
          </Card>
        </div>
      }
    />
  );
};


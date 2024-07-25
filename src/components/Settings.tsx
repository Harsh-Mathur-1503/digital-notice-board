import React from 'react';

interface SettingsProps {
  toggleWidget: (widget: string) => void;
  enabledWidgets: { [key: string]: boolean };
}

const Settings: React.FC<SettingsProps> = ({ toggleWidget, enabledWidgets }) => {
  return (
    <div className="fixed top-0 right-0 mt-16 mr-4 bg-teal-50 border border-teal-50 rounded-lg shadow-lg p-4 z-50">
      <h2 className="text-lg font-semibold mb-4 text-teal-700">Widget Settings</h2>
      <div className="space-y-2">
        {Object.keys(enabledWidgets).map(widget => (
          <div key={widget} className="flex items-center">
            <input
              type="checkbox"
              id={widget}
              checked={enabledWidgets[widget]}
              onChange={() => toggleWidget(widget)}
              className="mr-2"
            />
            <label htmlFor={widget} className="text-teal-600 capitalize">{widget.replace(/([A-Z])/g, ' $1').toLowerCase()}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
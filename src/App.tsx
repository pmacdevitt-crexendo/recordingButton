import type { ExtensionComponentProps, FlowContext } from '@netsapiens/flow-sdk';
import { useEffect } from 'react';
import { useRemoteApp } from '@netsapiens/flow-sdk';

declare const __MF_NAME__: string;

// One button per Call Logs row. Flow hands each copy that row's call data.
function RecordingRowButton({ context }: ExtensionComponentProps) {
  const row = (context.pageContext as { row?: Record<string, unknown> } | undefined)?.row;
  const { IconButton, Tooltip } = context.ui ?? {};

  if (!row) return null;

  const handleClick = () => {
    // Replace this with what the button should actually do with `row`.
    alert('Recording button clicked');
  };

  // Fallback if Flow's components aren't available.
  if (!IconButton) {
    return (
      <button onClick={handleClick} title='Recording'>
        Recording
      </button>
    );
  }

  const button = (
    <IconButton
      icon='material-symbols:radio-button-checked'
      iconSize={18}
      size='small'
      aria-label='Recording'
      onClick={handleClick}
    />
  );

  return Tooltip ? <Tooltip title='Recording'>{button}</Tooltip> : button;
}

export default function App(flowContext: FlowContext) {
  const { sdk } = useRemoteApp(flowContext, __MF_NAME__);

  useEffect(() => {
    sdk.registerDynamicExtension({
      id: 'call-logs-row-recording',
      zone: 'table-row-actions',
      routes: [
        { pattern: '/manage/call-logs' },   // your own call logs
        { pattern: '/manage/*/call-logs' }, // call logs under a domain or user
        { pattern: "/home/domain/call-logs" },
      ],
      component: RecordingRowButton,
    });
  }, [sdk]);

  return null; // headless: the buttons live in the Call Logs rows
}

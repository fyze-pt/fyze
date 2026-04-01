declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        "auto-rotate"?: boolean | string;
        "camera-controls"?: boolean | string;
        "disable-zoom"?: boolean | string;
        "rotation-per-second"?: string;
        "camera-orbit"?: string;
        "field-of-view"?: string;
        "min-camera-orbit"?: string;
        "max-camera-orbit"?: string;
        "environment-image"?: string;
        exposure?: string;
        "shadow-intensity"?: string;
        loading?: string;
        poster?: string;
        "interaction-prompt"?: string;
        "environment-rotation"?: string;
        "disable-pan"?: boolean | string;
      },
      HTMLElement
    >;
  }
}

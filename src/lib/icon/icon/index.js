import React from "react";
const Icon = ({ down, hover, name, ...rest }) => {
  const ImportedIconRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!name) return;
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../../../assets/icons/${name}.svg`
          )
        ).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

export default Icon;

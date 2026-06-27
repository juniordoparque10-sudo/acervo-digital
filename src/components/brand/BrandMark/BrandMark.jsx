import { useState } from "react";
import { BookOpen } from "lucide-react";
import isotipoLogo from "../../../assets/logos/acervo-isotipo.png";
import "./BrandMark.css";

export default function BrandMark({
  className = "",
  fallbackLabel = "Acervo Digital",
  variant = "isotipo",
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <span className={`brand-mark brand-mark--${variant} ${className}`.trim()}>
      {hasError ? (
        <BookOpen size={variant === "isotipo" ? 24 : 28} aria-hidden="true" />
      ) : (
        <img src={isotipoLogo} alt={fallbackLabel} onError={() => setHasError(true)} />
      )}
    </span>
  );
}

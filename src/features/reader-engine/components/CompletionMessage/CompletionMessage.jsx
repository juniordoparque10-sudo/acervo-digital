import { CheckCircle2 } from "lucide-react";
import "./CompletionMessage.css";

export default function CompletionMessage({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <div className="completion-message" role="status">
      <CheckCircle2 size={22} />
      <div>
        <strong>Leitura concluída</strong>
        <p>Você chegou ao final desta obra demonstrativa. O progresso foi salvo.</p>
      </div>
    </div>
  );
}

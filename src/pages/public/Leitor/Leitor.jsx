import { useParams } from "react-router-dom";
import { ReaderShell } from "../../../features/reader-engine";
import "./Leitor.css";

export default function Leitor() {
  const { id } = useParams();

  return (
    <main className="reader-page">
      <ReaderShell bookId={id} />
    </main>
  );
}

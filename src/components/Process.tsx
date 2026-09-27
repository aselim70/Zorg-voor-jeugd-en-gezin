import { PROCESS } from "@/lib/site";
export function Process() {
  return <ol className="process-grid">{PROCESS.map(item => <li key={item.step}><span className="step-number">{item.step}</span><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol>;
}

import CardSummary from '../components/CardS';
import Chart from '../components/ChartBars';

export default function Test() {
  return (
    <div>
      <h1>Welcome</h1>
      <Chart />
      <CardSummary title="Tareas" value="35" footer="" />
      <CardSummary title="Eventos próximos" value="10" footer="" />
    </div>
  );
}

import Globe from "../components/Globe/Globe";

export default function Home() {
  return (
    <div>
      <header
        style={{
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 className="text-3xl font-bold">Ethio Data Visual</h1>
      </header>
      <Globe />
    </div>
  );
}

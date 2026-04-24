interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
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
      <main
        style={{
          display: "flex",
          overflow: "hidden",
          flex: 1,
        }}
      >
        <aside
          style={{
            width: "200px",
            borderRight: "1px solid #ccc",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Data Panel</h2>
        </aside>
        <section
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          {children}
        </section>
      </main>
    </div>
  );
}

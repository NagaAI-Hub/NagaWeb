import { Card } from "@/components/ui/card";

export default async function Dashboard() {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 w-full h-screen overflow-auto">
        <Card>
          <iframe className="w-full h-full" src="https://chat.naga.ac/" />
        </Card>
      </div>
    </>
  );
}

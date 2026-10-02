import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full h-screen flex items-center justify-between p-55">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[385px] h-screen flex flex-col gap-[50px] justify-center">
              <h1 className="w-full h-fit">
                Making pants that{" "}
                <span className="text-primary">you want to wear</span>
              </h1>
              <p className="text-black/70 w-full h-fit">
                We make pants that are designed straight from Etiene Farka and
                Liam Grippa, co founders of bblankk[ ].
              </p>
              <Button link></Button>
            </div>
          </div>
          <div className="h-screen max-w-[500px] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

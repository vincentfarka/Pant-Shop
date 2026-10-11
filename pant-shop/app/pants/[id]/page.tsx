
type pantCheckoutProps = {
    params: Promise<{ id: number }>
}

export default async function pantCheckout({ params }: pantCheckoutProps) {
    const { id } = await params
    return <h1 className="m-auto">hello {id}</h1>
}
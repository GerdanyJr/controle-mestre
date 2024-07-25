import { CreateFuncionarioReq } from "@/@types/interfaces/req/CreateFuncionarioReq";
import { queryClient } from "@/components/utils/reactQueryProvider";

export async function createFuncionario(newFuncionario: CreateFuncionarioReq) {
    const response = await fetch("http://localhost:8080/funcionario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newFuncionario }),
    });
    if (response.status !== 200) {
        const errorResponse = await response.text();
        const error = JSON.parse(errorResponse);
        return { message: error.message, error: true };
    }
    queryClient.invalidateQueries({ queryKey: ["funcionarios"] });
    return { error: false, message: "Funcionario criado com sucesso!" };
}
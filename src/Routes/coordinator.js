export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/signUp")
}

export const goToRecipesList = (history) => {
    history.push("/")
}

export const goToCategorias = (history,id) => {
    history. push (`/categorias/${id}`)
}


export const goToCart = (history) => {
    history. push ("/carrinho")
}

export const goToPerfil = (history) => {
    history. push ("/meuPerfil")
}

export const goToFiltroRestaurante = (history) => {
    history. push ("/filtro/restaurante")
}




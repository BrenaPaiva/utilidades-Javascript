    let aceitar = false;
    console.log('Pedindo uber')
    const promessa = new Promise((resolve, reject) => {
        if (aceitar) {
            return reject('Aceito! O motorista chegará em alguns minutos.');
        } return resolve('Pedido Negado!')

    })
    console.log('Aguardando')

    promessa.then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado!'))



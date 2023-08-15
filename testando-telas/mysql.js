import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Projetostart8', // Sua senha do banco de dados aqui, caso haja
    database: 'Gotadeesperanca'
});

con.connect((err) => {
    if (err) {
        console.error('Erro connecting to database...', err);
        return;
    }
    console.log('Conexão feita com sucesso!');

    // Exemplo de consulta para recuperar dados de uma tabela
    const sqlQuery = 'SELECT * FROM cadastro_doa'; // Substitua 'tabela_exemplo' pelo nome da tabela que você quer consultar

    // Consulta realizada após a conexão ser estabelecida
    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Erro na consulta...', err);
            return;
        }
        
        // 'result' conterá os dados retornados pela consulta
        console.log('Dados do banco de dados:');
        console.log(result);

        // Agora que a consulta foi executada e os dados foram processados, podemos encerrar a conexão
        con.end((err) => {
            if (err) {
                console.error('Erro ao encerrar conexão...', err);
                return;
            }
            console.log('Conexão encerrada com sucesso!');
        });
    });
});
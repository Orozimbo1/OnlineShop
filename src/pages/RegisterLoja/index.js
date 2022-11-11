import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FormContainer } from '../../styles/GlobalStyles';
import { Form, Title, Main } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.auth.isLoading);

    const [nomeFantasia, setNomeFantasia] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [CNPJ, setCNPJ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (!nomeFantasia) {
            formErrors = true;

            toast.error('O campo nome fantasia é obrigatório.');
        }
        if (!isEmail(email)) {
            formErrors = true;

            toast.error('Email inválido ex:"example@example.com".');
        }
        if (!senha) {
            formErrors = true;

            toast.error('O campo senha é obrigatório.');
        }
        if (!CNPJ) {
            formErrors = true;

            toast.error('O campo CNPJ é obrigatório.');
        }

        if (formErrors) return;

        dispatch(actions.registerRequest({ nomeFantasia, email, senha, CNPJ }));
    }

    return (
        <Main>
            <FormContainer>
                <Loading isLoading={isLoading} />

                <Title>Crie sua conta</Title>

                <Form onSubmit={handleSubmit}>
                    <label htmlFor="nome_fantasia">
                        Nome Fantasia:
                        <input
                            type="text"
                            value={nomeFantasia}
                            onChange={(e) => setNomeFantasia(e.target.value)}
                            placeholder="Digite o nome da sua loja"
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                        />
                    </label>
                    <label htmlFor="senha">
                        Senha:
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </label>
                    <label htmlFor="CNPJ">
                        CNPJ:
                        <input
                            type="text"
                            value={CNPJ}
                            onChange={(e) => setCNPJ(e.target.value)}
                            placeholder="XX. XXX. XXX/0001-XX"
                        />
                    </label>

                    <button type="submit">Criar minha conta</button>
                    <p>
                        Já tem uma conta?{' '}
                        <Link to="/login-loja">
                            <strong>Faça login</strong>
                        </Link>
                    </p>
                </Form>
            </FormContainer>
        </Main>
    );
}

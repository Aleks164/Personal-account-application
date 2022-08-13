import React from 'react';
import { logInAction } from '../store/reducers/logInAction';
import { useTypedDispatch, useTypedSelector } from '../hooks/redux';
import { addUser, deleteUser } from '../store/reducers/userManager';
import { sigInAction } from '../store/reducers/sigInAction';

export const PersonalAccount = () => {
    const { users, error, isAuth, isLoading } = useTypedSelector(state => state.userManager);
    const dispatch = useTypedDispatch();

    return (
        <div >
            <div>
                <button
                    onClick={() => dispatch(sigInAction("Aleks164", "123"))}
                >
                    sigInAction1
                </button>
                {isLoading && <div>Is Loading</div>}
                <span style={{ width: "100px", height: "100px", border: "2px solid" }}>{JSON.stringify(users)}</span>
                <span style={{ width: "100px", height: "100px", border: "2px solid" }}>{JSON.stringify(error)}</span>
                <button
                    onClick={() => dispatch(sigInAction("132", "13133"))}
                >
                    sigInAction2
                </button>
            </div>
        </div>
    )
}
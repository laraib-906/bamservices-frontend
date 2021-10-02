import { IRouters } from '../../types/routes';
import { IUser } from '../../types/user';
import React from 'react'


interface Props {
	user: IUser;
	routes: IRouters[],
}

const Header = (props: Props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="md:col-span-12">
                    <div className="text-center">
                        hellor
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Header;

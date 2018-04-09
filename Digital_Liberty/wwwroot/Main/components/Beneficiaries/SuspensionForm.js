import React from 'react';

export default class SuspensionForm extends React.Component {
    render() {
        return (
            <div>
                <form method="post" action="/api/Suspensions">
                    Descripcion:<br />
                    <input type="text" name="Description" /><br />
                    PersonID:<br />
                    <input type="text" name="PersonID" /><br />
                    SuspensionDate:<br />
                    <input type="date" name="SuspensionDate" /><br />
                    <input type="submit" value="PostSuspension" />
                </form>
            </div>
        );
    }
}
import React from 'react'

const RepoItems = ({repo}) => {
    return (
        <div>

            <div className="card">

                <h3>

                    <a href={repo.html_url}>{repo.name}</a>
                </h3>

            </div>
            
        </div>
    )
}

export default RepoItems

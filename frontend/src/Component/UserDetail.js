const UserDetail = ({user})=>{
    
    return (
        <div className="container mt-5">
          <h2 className="text-center mb-4">User Details</h2>
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <strong>ID:</strong> {user.id}
              </div>
              <div className="mb-3">
                <strong>First Name:</strong> {user.first_name}
              </div>
              <div className="mb-3">
                <strong>Last Name:</strong> {user.last_name}
              </div>
              <div className="mb-3">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="mb-3">
                <strong>Gender:</strong> {user.gender}
              </div>
              <div className="mb-3">
                <strong>Avatar:</strong>{' '}
                <img src={user.avatar} alt="User Avatar" className="img-fluid" />
              </div>
              <div className="mb-3">
                <strong>Domain:</strong> {user.domain}
              </div>
              <div className="mb-3">
                <strong>Available:</strong>{' '}
                {user.available ? (
                  <span className="text-success">Yes</span>
                ) : (
                  <span className="text-danger">No</span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    
}
export default UserDetail;
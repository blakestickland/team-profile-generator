
const generateInternCard = (element) => 
`
<div class="col-sm-4">
<div class="card text-center shadow rounded" style="width: 18rem;" id="card-1">
    <div class="card-body">
        <h3 class="card-title">${element.name}</h3>
        <h4 class="card-subtitle mb-2 text-muted">${element.role}</h4>
        <hr>
        <p class="card-text ID">ID: ${element.id}</p>
        <p class="card-text email">Email: <a href="mailto:${element.email}">${element.email}</a></p>
        <!-- Enter a dynamic entry in next line based on job position -->
        <p class="card-text">School: ${element.school}</p>  
    </div>
</div>
</div>
`;
                         

module.exports = {
    generateInternCard
}

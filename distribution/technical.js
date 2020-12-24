let tableContent = [
    {
        case: 1,
        imageSrc: 'img/1_pUEZd8z__1p-7ICIO1NZFA.png',
        errorName: 'typical error',
        errorDescription: 'this is a common error'

    },

    {
        case: 2,
        imageSrc: 'img/1_pUEZd8z__1p-7ICIO1NZFA.png',
        errorName: 'non typical error',
        errorDescription: 'this is an uncommon error'

    },

    {
        case: 3,
        imageSrc: 'img/1_pUEZd8z__1p-7ICIO1NZFA.png',
        errorName: 'general error',
        errorDescription: 'this is a general error'

    },

];



const techIssue = () => {

  

    errorList = tableContent.reduce((errors, presentError) => {

        errors += `
        
      
     
        <tr class = 'row ml-0 mr-0 pl-0 pr-0'>
        <th class = 'col-1' scope = 'row'>${presentError.case}</th>
        <td class = 'col-3'> <img src = '${presentError.imageSrc}' class = 'img img-responsive img-thumbnail w-25' ></td>
        <td class = 'col-3'> ${presentError.errorName}</td>
        <td class = 'col-3' > ${presentError.errorDescription}</td>  
        <td class = 'col-2 mx-auto' >   
        <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"></button>
        

        </tr>
       

  
     `;

        return errors;


    }, '');

    errorElement = document.getElementById('technical-head');
    errorElement.innerHTML = errorList;
}

techIssue();
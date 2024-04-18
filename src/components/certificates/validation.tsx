export default function Validation({ inputs }) {
    const errors = {};

    if (inputs.firstName === '') {
        errors.name = 'Name is required';
    } else if (inputs.lastName === '') {
        errors.lastName = 'Last Name is required';
    } else if (inputs.gender === '') {
        errors.gender = 'Please select your gender';
    } else if (inputs.emailAddress === '') {
        errors.email = 'Email Address is required';
    } else if (inputs.contactNum === '') {
        errors.contact = 'Contact Number is required';
    } else if (inputs.birthDate === '') {
        errors.birthday = 'Birth Date is required';
    } else if (inputs.religion === '') {
        errors.religion = 'Religion is required';
    } else if (inputs.status === '') {
        errors.status = 'Religion is required';
    } else if (inputs.sector === '') {
        errors.sector = 'Sector is required';
    } else if (inputs.emergName === '') {
        errors.emergName = 'Emergency Contact Name is required';
    } else if (inputs.emerContact === '') {
        errors.emerContact = 'Emergency Contact Number is required';
    } else if (inputs.emerAddress === '') {
        errors.emerAddress = 'Emergency Address is required';
    }
}

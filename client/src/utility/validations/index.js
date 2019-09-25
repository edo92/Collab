export const validate = props => {
    let status={}, messages={};
    let validForm=true;
    let { form, options } = props;

        validateForm();

        setTimeout(()=> { 
            props.onAction({ 
                validForm, status, messages
            });
        }, 900 );

    if( options.withPrefix ){
        for( let i in status ){
            status[i] = !status[i] ? 'error' : 'success';
        }
    };

///---------- Validate Form Input ---------------
    function onValidating(){
        let vldStatus={};
        for( let fild in form ){
            vldStatus[`${fild}Status`]='validating';
        };
        props.onAction({ status: vldStatus, messages:{} });
    };

    function validateForm(){
        onValidating();
        for( let fild in form ){ 
            let isValid = true;
            // iterate rules on each form fild
            for( let rule in rules[fild] ){ 
                isValid = fildValidity( rule, fild, rules[fild] );
                if( !isValid ){ validForm = isValid; break }
            };
        };

        function fildValidity( rule, fild, fildRule ){
            let action = validators[rule];
            let isValid = action( form[fild], fildRule[rule], form );
            setValidateStatus( rule, fild, isValid );
            return isValid;
        };

        function setValidateStatus(rule, fild, isValid ){
            status[`${fild}Status`] = isValid && isValid;
            messages[`${fild}Message`] = !isValid && customErrMessage();

            // Customize error messages 
            function customErrMessage(){
                let toUppercase = fild.charAt(0).toUpperCase() + fild.slice(1)
                return `${toUppercase} ${errorTypes[`${rule}_Message`]}`;
            }
        };
    };
};

const rules = {
    email: {
        rxValidate: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
        minLength: 7,
    },
    repPassword: {
        minLength: 7,
        equalsTo: 'password',
    },
    displayName: {
        required: true
    }
};

const validators = {
    minLength: (input, rule)=> { return input.length >= rule },
    equalsTo: (input, rule, form )=> { return form[rule] === input },
    rxValidate: (input,rule)=> { return rule.test( input ) },
    required: (input)=> { return input.length > 0 }
};

let errorTypes = {
    rxValidate_Message: 'is not in proper format',
    minLength_Message: 'must be at least 7 characters',
    exact_Message: 'Password does not match',
    required_Message: 'can not be empty',
    equalsTo_Message: 'do not match',
};
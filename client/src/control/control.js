

export const checkErrors = (input) => {

    let status = {
        title: '',
        healthScore: '',
        summary: '',
        stepToStep: ''
    }
    //----------------------------------------------------------

    if (input.title === '') {
        status.title = 'error'
    } else {
        status.title = 'ok';
    }

    if (input.title) {
        let patt = new RegExp(/^[A-Za-z0-9\s]+$/g);
        let res = patt.test(input.title);
        if (!res || input.title.length < 5) {
            status.title = 'error'
        } else {
            status.title = 'ok'
        }
    }

    //----------------------------------------------------------

    if (parseInt(input.healthScore, 10) < 0 || parseInt(input.healthScore, 10) > 100 || input.healthScore === '') {
        status = { ...status, healthScore: 'error' }
    } else {
        status = { ...status, healthScore: 'ok' }
    }

    //----------------------------------------------------------

    if (input.summary === '') {
        status.summary = 'error'
    } else {
        status.summary = 'ok';
    }

    if (input.summary) {
        let patt = new RegExp(/^[A-Za-z0-9\s]+$/g);
        let res = patt.test(input.summary);
        if (input.summary.length < 20) {
            status.summary = 'error'
        } else {
            status.summary = 'ok'
        }
    }

    //----------------------------------------------------------

    if (input.diets.length > 3 || input.diets.length == 0) {
        status.diets = 'error'
    } else {
        status.diets = 'ok'
    }

    //----------------------------------------------------------

    if (input.stepToStep[0].length > 10) {
        status.stepToStep = 'ok'
    } else {
        status.stepToStep = 'error'
    }

    return status
}


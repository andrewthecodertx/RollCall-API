exports.convertTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    console.log(hours, minutes);

    return hours + minutes/60;
}
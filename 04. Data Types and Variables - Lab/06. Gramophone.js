function gramophone(bandName, albumName, songName) {
    let songDurationInSeconds = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = 0;
    for (let i = 0; i <= songDurationInSeconds; i += 2.5) {
        rotations++;
    }
    console.log(`The plate was rotated ${rotations} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')

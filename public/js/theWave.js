import * as Tone from 'tone'

document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

const synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease("C4", "8n");

<script lang="ts">

    interface Question {
        id: number;
        text: string;
    }

	let wantSpam = $state(false)
    let selected = $state<Question | undefined>()
    let answer = $state('')

	let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	]

    function handleSubmit() {
        alert(`You selected question '${selected?.text}' with answer: ${answer}. Spam: ${wantSpam}`);
    }
</script>

<div class="m-4 mx-auto w-2/3 card bg-amber-100 p-4">
	<h2>Insecure Question Component</h2>

	<form class="form" onsubmit="{handleSubmit}">

		<label class="label">
			<input class="checkbox" type="checkbox" bind:checked={wantSpam} />
			Yes! Please send me all the spam!
		</label>

        <select class="select" bind:value={selected} required>
            <option value="" disabled selected>Select a security question</option>
            {#each questions as question}
                <option value={question}>{question.text}</option>
            {/each}
        </select>

        <input class="input" bind:value={answer} placeholder="Your Answer" required />
        <button class="btn preset-filled-primary-500" type="submit">Submit</button>
	</form>
</div>
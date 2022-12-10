class Problem {
	constructor(problemId, title) {
		this._problemId = problemId;
		this._title = title;
	}


	get problemId() {
		return this._problemId;
	}

	get title() {
		return this._title;
	}
}
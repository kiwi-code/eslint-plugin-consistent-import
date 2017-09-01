import R from "ramda"

export const getModuleName = R.compose(R.head, R.split("."), R.last, R.split("/"))

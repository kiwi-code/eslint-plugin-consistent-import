import R from "ramda"

import { name, value, specifiers, local, source, type } from "./propGetters"


const getFirstSpecifier = R.compose(R.head, specifiers)
const isNotEmpty = R.complement(R.isEmpty)
const isDefined = R.complement(R.isNil)

export const hasImportSpecifier = R.compose(R.allPass([isDefined, isNotEmpty]), getFirstSpecifier)
export const doesNotHaveImportSpecifier = R.complement(hasImportSpecifier)

export const getImportName = R.compose(name, local, getFirstSpecifier)
export const getImportType = R.compose(type, getFirstSpecifier)
export const getSourceValue = R.compose(value, source)

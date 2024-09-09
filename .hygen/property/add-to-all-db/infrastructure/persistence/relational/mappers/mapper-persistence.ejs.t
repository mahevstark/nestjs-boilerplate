---
inject: true
to: src/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>/infrastructure/persistence/relational/mappers/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>.mapper.ts
after: new <%= name %>Entity\(\)
---
<% if (kind === 'primitive') { -%>persistenceEntity.<%= property %> = domainEntity.<%= property %>;<% } -%>

<% if (kind === 'reference' && referenceType === 'oneToOne') { -%>
if (domainEntity.<%= property %>) {
  persistenceEntity.<%= property %> = <%= type %>Mapper.toPersistence(domainEntity.<%= property %>);
}
<% } -%>

<% if (kind === 'reference' && (referenceType === 'oneToMany' || referenceType === 'manyToMany')) { -%>
if (domainEntity.<%= property %>) {
  persistenceEntity.<%= property %> = domainEntity.<%= property %>.map((item) => <%= type %>Mapper.toPersistence(item));
}
<% } -%>
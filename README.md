# singly_linked_lists
Code along with Colt Steele's JS algorithms and data structures masterclass.

This section is about Singly Linked Lists. 

What is a linked list?
- an ordered list with fast inserts/removals at the beginning and end
    - as compared to arrays where `shift` and `unshift` are costly
    - although random access is not allowed
- a data structure that contains a head, tail, and length property
	- from the head you can figure out the next element 
	- think of it as a skyscraper without an elevator, you have to take the stairs and access each floor individually from the beginning
- consist of nodes
	- node is a piece of data or element
	- refers the next node
	- each node has a value and a pointer to another node || null
- a bunch of elements with no index pointing to the next element
- you have to start at the beginning to access elements

- Big O
    - insertion O(1)
    - removal O(1) or O(n)
    - searching O(n)
    - access O(n)
import { Component, Inject, Injectable, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

//características do component
@Component ({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    
    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    //variável presente somente neste componente
    _filterBy: string = '';
    
    
    constructor(private courseService: CourseService) {}
    
    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with succes');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
    //para criar o evento de input
    set filter(value: string) {
        this._filterBy = value;
        //filtrando o curso e igualando o valor do Filter em memória ao nosso filteredCourses
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    //atualizar o input
    get filter():string {
        return this._filterBy;
    }
}


import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

//características do component
@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    
    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    //variável presente somente neste componente
    _filterBy: string = '';
    

    constructor(private courseService: CourseService {

    };

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();

    };
    //para criar o evento de input
    set filter(value: string) {
        this._filterBy = value;
        //filtrando o curso e igualando o valor do Filter em memória ao nosso filteredCourses
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    };
    //atualizar o input
    get filter():string {
        return this._filterBy;
    };
}


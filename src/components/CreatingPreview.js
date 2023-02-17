import React from "react";

export function UploadingPreview() {
    return(
        <section className="creation-preview px-md-3">
                <div className="creation-container">
                    <div className="creation-header">
                        <h1>Preview</h1>
                    </div>
                    <div className="creation-content">
                        <div className="preview-paper">
                            <div className="preview-paper-words">
                            <p>I keep a running list of ideas and observations that could be used for columns or essays, and this week, my original
                                plan was to write about A. Philip Randolph, the labor leader and civil rights activist whose work in the 1930s, ’40s
                                and
                                ’50s was crucial to the growth and success of the civil rights movement. He had a starring role at the 1963 March on
                                Washington for Jobs and Freedom, which itself was the culmination of an effort Randolph had begun in 1941 with his
                                fellow activist Bayard Rustin and other allies in the civil rights and labor movements.
                            
                                I couldn’t make the column work — these things happen! — but I still want to share some of the material, both
                                because
                                it’s intrinsically interesting and because it illustrates a point I have made, and will continue to make, in my work
                                for
                                The Times.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function BlackoutPreview() {
    return (
        <section className="creation-preview px-md-3">
            <div className="creation-container">
                <div className="creation-header">
                    <h1 className="d-none d-md-block">Blackout</h1>
                </div>
                <div className="creation-content">
                    <div className="preview-paper">
                        <div className="preview-paper-words">
                            <p>I <span className="blackout">keep</span> <span className="blackout">a running</span>list <span className="blackout">of</span>
                                ideas and observations that could be used <span className="blackout">for columns or essays,</span>
                                <span className="blackout">and</span>this week,
                                <span className="blackout">my original
                                    plan was to write about A. Philip Randolph, the labor leader and civil rights activist whose</span> work
                                <span className="blackout">in the 1930s, ’40s and ’50s</span>
                                was crucial to the growth <span className="blackout">and success of the civil rights movement. He had a starring role at
                                    the 1963 March on
                                    Washington for Jobs and Freedom, which itself was the culmination of an effort Randolph had begun in 1941 with
                                    his
                                    fellow activist Bayard Rustin and other allies in the civil rights and labor movements. </span>
                            
                                <span className="blackout">I couldn’t</span> make <span className="blackout">the column work —</span> these things happen!
                                <span className="blackout">— but I still want to share some of the material, both because
                                    it’s intrinsically interesting and because it illustrates a point I have made, and will continue to make, in my
                                    work for
                                    The Times.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function FinalizingPreview() {
    return (
        <section className="creation-preview px-md-3">
        <div className="creation-container">
            <div className="creation-header">
                <h1 className="d-none d-md-block">Finalize</h1>
            </div>
            <div className="creation-content">
                <div className="preview-paper">
                    <div className="preview-paper-words">
                        <p>I <span className="blackout">keep</span> <span className="blackout">a running</span>list <span className="blackout">of</span>
                        ideas and observations that could be used <span className="blackout">for columns or essays,</span>
                        <span className="blackout">and</span>this week, 
                        <span className="blackout">my original
                        plan was to write about A. Philip Randolph, the labor leader and civil rights activist whose</span> work 
                        <span className="blackout">in the 1930s, ’40s and ’50s</span> 
                        was crucial to the growth <span className="blackout">and success of the civil rights movement. He had a starring role at the 1963 March on
                        Washington for Jobs and Freedom, which itself was the culmination of an effort Randolph had begun in 1941 with his
                        fellow activist Bayard Rustin and other allies in the civil rights and labor movements. </span>
                        
                        <span className="blackout">I couldn’t</span> make <span className="blackout">the column work —</span> these things happen! 
                        <span className="blackout">— but I still want to share some of the material, both because
                        it’s intrinsically interesting and because it illustrates a point I have made, and will continue to make, in my work for
                        The Times.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}